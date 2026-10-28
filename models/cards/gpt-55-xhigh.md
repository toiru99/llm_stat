---
type: Model
title: GPT-5.5 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 91.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.0, z: 1.7, r: 75.5, estimated: false }  # 전문 지식
  reasoning: { s: 86.3, z: 1.83, r: 77.5, estimated: false }  # 추론
  coding: { s: 85.3, z: 1.61, r: 74.2, estimated: false }  # 코딩
  agentic: { s: 80.8, z: 1.6, r: 74.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.84, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.56, r: 73.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# GPT-5.5 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 91.0 t/s · TTFT 61.42s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.5 | +1.7 | 실측 | [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 77.5 | +1.83 | 실측 | [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 74.2 | +1.61 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 74.1 | +1.6 | 실측 | [[apex-agents]] 38.0%×1.0, [[gdpval]] 1360.0%×1.0, [[itbench]] 46.0%×1.0, [[tau3-banking]] 39.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.7 | +0.84 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 73.5 | +1.56 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
