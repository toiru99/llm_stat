---
type: Model
title: GPT-5.5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 71.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.7, z: 1.2, r: 68.0, estimated: false }  # 전문 지식
  reasoning: { s: 73.8, z: 1.27, r: 69.0, estimated: false }  # 추론
  coding: { s: 78.8, z: 1.4, r: 71.0, estimated: false }  # 코딩
  agentic: { s: 61.4, z: 0.94, r: 64.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.78, r: 61.7, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.16, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.86, r: 62.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-5.5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 71.0 t/s · TTFT 1.65s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.0 | +1.2 | 실측 | [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 69.0 | +1.27 | 실측 | [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 71.0 | +1.4 | 실측 | [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 64.0 | +0.94 | 실측 | [[gdpval]] 1053.0%×1.0, [[tau3-banking]] 25.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.7 | +0.78 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 67.5 | +1.16 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 62.9 | +0.86 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
