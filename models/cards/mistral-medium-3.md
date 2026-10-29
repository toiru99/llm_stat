---
type: Model
title: Mistral Medium 3
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.56
output_speed_tps: 48.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.0, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.4, z: -0.69, r: 39.6, estimated: false }  # 추론
  coding: { s: 6.1, z: -1.04, r: 34.4, estimated: false }  # 코딩
  agentic: { s: 6.1, z: -0.97, r: 35.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 52.1, z: -1.0, r: 35.0, estimated: false }  # 멀티모달
  long_context: { s: 34.8, z: -0.52, r: 42.2, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.62, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Mistral Medium 3

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $0.4 · 출력 $2.0 · 혼합 $0.56/1M · 48.0 t/s · TTFT 2.74s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.6 | -0.69 | 실측 | [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.4 | -1.04 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 35.5 | -0.97 | 실측 | [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 35.0 | -1.0 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 42.2 | -0.52 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 40.8 | -0.62 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
