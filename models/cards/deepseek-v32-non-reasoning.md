---
type: Model
title: DeepSeek V3.2 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.294
output_speed_tps: 32.23570126303414
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 49.1, z: 0.08, r: 51.3, estimated: false }  # 전문 지식
  reasoning: { s: 30.6, z: -0.25, r: 46.3, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 64.5, z: 0.68, r: 60.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.5, z: -0.06, r: 49.1, estimated: false }  # 긴문맥
  instruction: { s: 51.9, z: -0.08, r: 48.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# DeepSeek V3.2 (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.294/1M · 32.23570126303414 t/s · TTFT 3.2507129280861125s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.3 | +0.08 | 실측 | [[gpqa-diamond]] 75.0505050505051%×0.4, [[humanitys-last-exam]] 11.2140871177016%×0.3 |
| 추론 | 46.3 | -0.25 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 75.0505050505051%×1.0, [[humanitys-last-exam]] 11.2140871177016%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[terminal-bench]] 32.5757575757576%×0.5 |
| 에이전트 | 60.2 | +0.68 | 실측 | [[tau2-bench]] 78.9473684210526%×1.0, [[terminal-bench]] 32.5757575757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.1 | -0.06 | 실측 | [[aa-lcr]] 45.6666666666667%×1.0 |
| 지시 따르기 | 48.7 | -0.08 | 실측 | [[ifbench]] 49.0476190476191%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
