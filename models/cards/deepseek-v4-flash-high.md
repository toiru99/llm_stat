---
type: Model
title: DeepSeek V4 Flash (high)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0622
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 67.9, z: 1.03, r: 65.4, estimated: false }  # 전문 지식
  reasoning: { s: 46.1, z: 0.54, r: 58.2, estimated: false }  # 추론
  coding: { s: 56.0, z: 0.5, r: 57.5, estimated: false }  # 코딩
  agentic: { s: 67.0, z: 0.7, r: 60.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 86.2, z: 1.48, r: 72.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V4 Flash (high)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.1119 · 출력 $0.2338 · 혼합 $0.0622/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 65.4 | +1.03 | 실측 | [[gpqa-diamond]] 86.6667%×0.4, [[humanitys-last-exam]] 30.2595%×0.3 |
| 추론 | 58.2 | +0.54 | 실측 | [[critpt]] 3.42857%×1.0, [[gpqa-diamond]] 86.6667%×1.0, [[humanitys-last-exam]] 30.2595%×1.0 |
| 코딩 | 57.5 | +0.5 | 실측 | [[scicode]] 40.162%×1.0, [[terminal-bench]] 38.6364%×0.5 |
| 에이전트 | 60.5 | +0.7 | 실측 | [[gdpval]] 1009.21 Elo×1.0, [[tau2-bench]] 95.614%×1.0, [[tau3-banking]] 26.1856%×1.0, [[terminal-bench]] 38.6364%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 72%×1.0 |
| 지시 따르기 | 72.3 | +1.48 | 실측 | [[ifbench]] 73.4694%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
