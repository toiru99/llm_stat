---
type: Model
title: Mistral Medium 3
creator: Mistral
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: 49.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.1, z: -0.48, r: 42.8, estimated: false }  # 전문 지식
  reasoning: { s: 21.0, z: -0.68, r: 39.8, estimated: false }  # 추론
  coding: { s: 38.7, z: -0.35, r: 44.8, estimated: false }  # 코딩
  agentic: { s: 15.2, z: -0.83, r: 37.6, estimated: false }  # 에이전트
  trust: { s: 43.7, z: 0.73, r: 61.0, estimated: false }  # 신뢰성
  multimodal: { s: 54.3, z: -0.84, r: 37.4, estimated: false }  # 멀티모달
  long_context: { s: 36.8, z: -0.37, r: 44.4, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.62, r: 40.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Medium 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# Mistral Medium 3

Mistral · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.4 · 출력 $2.0 · 혼합 $None/1M · 49.0 t/s · TTFT 1.51s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.8 | -0.48 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.8 | -0.68 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 44.8 | -0.35 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 37.6 | -0.83 | 실측 | [[tau2-bench]] 24.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 61.0 | +0.73 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 37.4 | -0.84 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 44.4 | -0.37 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 40.7 | -0.62 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
