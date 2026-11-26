---
type: Model
title: Step 3.7 Flash
creator: StepFun
license: Open
intelligence_index: None
price_blended_usd_1m: 0.183
output_speed_tps: 148.743361258459
context_window: 262144
status: past
size_class: Large
params_b: 198
is_reasoning: true
radar:
  knowledge: { s: 58.9, z: 0.59, r: 58.8, estimated: false }  # 전문 지식
  reasoning: { s: 38.8, z: 0.18, r: 52.7, estimated: false }  # 추론
  coding: { s: 58.5, z: 0.59, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 58.1, z: 0.39, r: 55.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.1, z: 0.5, r: 57.4, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.78, r: 61.7, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.12, r: 66.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.7 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Step 3.7 Flash

StepFun · Open · Large(198B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.2 · 출력 $1.15 · 혼합 $0.183/1M · 148.743361258459 t/s · TTFT 2.89948976881097s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.8 | +0.59 | 실측 | [[gpqa-diamond]] 80.9091%×0.4, [[humanitys-last-exam]] 21.4087%×0.3 |
| 추론 | 52.7 | +0.18 | 실측 | [[critpt]] 2.28571%×1.0, [[gpqa-diamond]] 80.9091%×1.0, [[humanitys-last-exam]] 21.4087%×1.0 |
| 코딩 | 58.8 | +0.59 | 실측 | [[scicode]] 43.8657%×1.0, [[terminal-bench]] 35.6061%×0.5 |
| 에이전트 | 55.8 | +0.39 | 실측 | [[gdpval]] 863.62 Elo×1.0, [[tau2-bench]] 98.538%×1.0, [[tau3-banking]] 11.9588%×1.0, [[terminal-bench]] 35.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.4 | +0.5 | 실측 | [[mmmu-pro]] 75.3179%×1.0 |
| 긴문맥 | 61.7 | +0.78 | 실측 | [[aa-lcr]] 73.6667%×1.0 |
| 지시 따르기 | 66.8 | +1.12 | 실측 | [[ifbench]] 67.2789%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
