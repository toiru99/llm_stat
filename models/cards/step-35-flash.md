---
type: Model
title: Step 3.5 Flash
creator: StepFun
license: Open
intelligence_index: None
price_blended_usd_1m: 0.064
output_speed_tps: 121.180097269075
context_window: 256000
status: past
size_class: Large
params_b: 196
is_reasoning: true
radar:
  knowledge: { s: 60.2, z: 0.65, r: 59.8, estimated: false }  # 전문 지식
  reasoning: { s: 39.7, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 41.4, z: 0.01, r: 50.2, estimated: false }  # 코딩
  agentic: { s: 68.3, z: 0.75, r: 61.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.4, z: -0.04, r: 49.4, estimated: false }  # 긴문맥
  instruction: { s: 73.6, z: 0.96, r: 64.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Step 3.5 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Step 3.5 Flash

StepFun · Open · Large(196B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.064/1M · 121.180097269075 t/s · TTFT 3.79837060074438s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 59.8 | +0.65 | 실측 | [[gpqa-diamond]] 83.1313%×0.4, [[humanitys-last-exam]] 21.1307%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[critpt]] 2.46939%×1.0, [[gpqa-diamond]] 83.1313%×1.0, [[humanitys-last-exam]] 21.1307%×1.0 |
| 코딩 | 50.2 | +0.01 | 실측 | [[terminal-bench]] 27.2727%×0.5 |
| 에이전트 | 61.2 | +0.75 | 실측 | [[tau2-bench]] 94.4444%×1.0, [[terminal-bench]] 27.2727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.4 | -0.04 | 실측 | [[aa-lcr]] 50%×1.0 |
| 지시 따르기 | 64.5 | +0.96 | 실측 | [[ifbench]] 64.5578%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
