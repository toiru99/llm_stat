---
type: Model
title: GPT-5 nano (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0535
output_speed_tps: 138.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.6, z: -0.26, r: 46.2, estimated: false }  # 전문 지식
  reasoning: { s: 39.8, z: -0.26, r: 46.1, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 25.8, z: -0.29, r: 45.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.9, z: -0.66, r: 40.1, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: -0.08, r: 48.7, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-5 nano (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · 138.0 t/s · TTFT 40.79s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.2 | -0.26 | 실측 | [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 46.1 | -0.26 | 실측 | [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 45.7 | -0.29 | 실측 | [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.1 | -0.66 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 48.7 | -0.08 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
