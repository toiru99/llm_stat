---
type: Model
title: GPT-5 nano (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0535
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.2, z: -0.27, r: 45.9, estimated: false }  # 전문 지식
  reasoning: { s: 39.4, z: -0.27, r: 45.9, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.37, r: 44.5, estimated: false }  # 코딩
  agentic: { s: 26.4, z: -0.27, r: 45.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.1, z: -0.67, r: 39.9, estimated: false }  # 멀티모달
  long_context: { s: 49.3, z: -0.1, r: 48.4, estimated: false }  # 긴문맥
  instruction: { s: 75.6, z: 0.96, r: 64.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GPT-5 nano (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.9 | -0.27 | 실측 | [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 8.7%×0.3 |
| 추론 | 45.9 | -0.27 | 실측 | [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 8.7%×1.0 |
| 코딩 | 44.5 | -0.37 | 실측 | [[terminal-bench]] 17.4%×0.5 |
| 에이전트 | 45.9 | -0.27 | 실측 | [[terminal-bench]] 17.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 39.9 | -0.67 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 48.4 | -0.1 | 실측 | [[aa-lcr]] 43.7%×1.0 |
| 지시 따르기 | 64.4 | +0.96 | 실측 | [[ifbench]] 65.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
