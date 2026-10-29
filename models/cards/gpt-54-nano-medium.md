---
type: Model
title: GPT-5.4 nano (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.179
output_speed_tps: 166.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.6, z: 0.22, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 50.9, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.43, r: 56.4, estimated: false }  # 코딩
  agentic: { s: 50.0, z: 0.54, r: 58.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 61.6, z: -0.52, r: 42.2, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.69, r: 60.3, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.86, r: 62.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GPT-5.4 nano (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · 166.0 t/s · TTFT 3.42s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.22 | 실측 | [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 56.4 | +0.43 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 58.1 | +0.54 | 실측 | [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.2 | -0.52 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 60.3 | +0.69 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 62.9 | +0.86 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
