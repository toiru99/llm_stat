---
type: Model
title: GPT-5 mini (minimal)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 110.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.1, z: -0.32, r: 45.1, estimated: false }  # 전문 지식
  reasoning: { s: 37.6, z: -0.37, r: 44.5, estimated: false }  # 추론
  coding: { s: 21.2, z: -0.53, r: 42.0, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.44, r: 43.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 58.9, z: -0.66, r: 40.2, estimated: false }  # 멀티모달
  long_context: { s: 43.8, z: -0.25, r: 46.2, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.21, r: 46.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# GPT-5 mini (minimal)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 110.0 t/s · TTFT 0.97s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.1 | -0.32 | 실측 | [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 44.5 | -0.37 | 실측 | [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 42.0 | -0.53 | 실측 | [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 43.3 | -0.44 | 실측 | [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 40.2 | -0.66 | 실측 | [[mmmu-pro]] 58.0%×1.0 |
| 긴문맥 | 46.2 | -0.25 | 실측 | [[aa-lcr]] 39.0%×1.0 |
| 지시 따르기 | 46.9 | -0.21 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
