---
type: Model
title: DeepSeek V3 0324
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 671
is_reasoning: false
radar:
  knowledge: { s: 38.9, z: -0.38, r: 44.3, estimated: false }  # 전문 지식
  reasoning: { s: 23.1, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 42.8, z: 0.06, r: 50.9, estimated: false }  # 코딩
  agentic: { s: 25.1, z: -0.78, r: 38.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.9, z: -0.36, r: 44.5, estimated: false }  # 긴문맥
  instruction: { s: 40.6, z: -0.41, r: 43.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3 0324
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V3 0324

DeepSeek · Open · Large(671B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 실측 | [[gpqa-diamond]] 65.4545%×0.4, [[humanitys-last-exam]] 4.74%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 65.4545%×1.0, [[humanitys-last-exam]] 4.74%×1.0 |
| 코딩 | 50.9 | +0.06 | 실측 | [[scicode]] 39.0046%×1.0, [[terminal-bench]] 15.1515%×0.5 |
| 에이전트 | 38.4 | -0.78 | 실측 | [[gdpval]] 76.48 Elo×1.0, [[tau2-bench]] 47.076%×1.0, [[tau3-banking]] 4.74227%×1.0, [[terminal-bench]] 15.1515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.5 | -0.36 | 실측 | [[aa-lcr]] 40.6667%×1.0 |
| 지시 따르기 | 43.9 | -0.41 | 실측 | [[ifbench]] 41.0204%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
