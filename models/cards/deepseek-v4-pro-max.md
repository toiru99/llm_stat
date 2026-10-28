---
type: Model
title: DeepSeek V4 Pro (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1765
output_speed_tps: 94.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.9, z: 1.3, r: 69.5, estimated: false }  # 전문 지식
  reasoning: { s: 76.8, z: 1.4, r: 71.0, estimated: false }  # 추론
  coding: { s: 72.1, z: 1.17, r: 67.6, estimated: false }  # 코딩
  agentic: { s: 61.7, z: 0.95, r: 64.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.56, r: 73.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# DeepSeek V4 Pro (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 94.0 t/s · TTFT 1.8s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.5 | +1.3 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 71.0 | +1.4 | 실측 | [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 67.6 | +1.17 | 실측 | [[scicode]] 51.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 64.2 | +0.95 | 실측 | [[apex-agents]] 24.0%×1.0, [[gdpval]] 1167.0%×1.0, [[itbench]] 38.0%×1.0, [[tau3-banking]] 30.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 73.5 | +1.56 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
