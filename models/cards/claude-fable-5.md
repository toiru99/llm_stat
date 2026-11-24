---
type: Model
title: Claude Fable 5
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 7.7
output_speed_tps: 86.225590208828
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.6, z: 1.94, r: 79.0, estimated: false }  # 전문 지식
  reasoning: { s: 83.4, z: 2.4, r: 85.9, estimated: false }  # 추론
  coding: { s: 91.1, z: 1.69, r: 75.3, estimated: false }  # 코딩
  agentic: { s: 89.5, z: 1.5, r: 72.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 72.1, z: 0.9, r: 63.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Fable 5

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 86.225590208828 t/s · TTFT 47.4479568870195s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 79.0 | +1.94 | 실측 | [[gpqa-diamond]] 92.6263%×0.4, [[humanitys-last-exam]] 55.468%×0.3 |
| 추론 | 85.9 | +2.4 | 실측 | [[critpt]] 28.5714%×1.0, [[gpqa-diamond]] 92.6263%×1.0, [[humanitys-last-exam]] 55.468%×1.0 |
| 코딩 | 75.3 | +1.69 | 실측 | [[scicode]] 60.9954%×1.0, [[terminal-bench]] 62.8788%×0.5 |
| 에이전트 | 72.4 | +1.5 | 실측 | [[gdpval]] 1618.46 Elo×1.0, [[tau2-bench]] 98.538%×1.0, [[tau3-banking]] 38.1443%×1.0, [[terminal-bench]] 62.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 82.3333%×1.0 |
| 지시 따르기 | 63.5 | +0.9 | 실측 | [[ifbench]] 63.4694%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
