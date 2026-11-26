---
type: Model
title: GLM-5.2 (max)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.902
output_speed_tps: 62.9110347069622
context_window: 1000000
status: past
size_class: Large
params_b: 753
is_reasoning: true
radar:
  knowledge: { s: 76.1, z: 1.43, r: 71.4, estimated: false }  # 전문 지식
  reasoning: { s: 68.4, z: 1.65, r: 74.8, estimated: false }  # 추론
  coding: { s: 74.2, z: 1.12, r: 66.8, estimated: false }  # 코딩
  agentic: { s: 80.7, z: 1.19, r: 67.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: 86.0, z: 1.48, r: 72.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GLM-5.2 (max)

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 62.9110347069622 t/s · TTFT 2.25435721916825s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 71.4 | +1.43 | 실측 | [[gpqa-diamond]] 89.4949%×0.4, [[humanitys-last-exam]] 41.1492%×0.3 |
| 추론 | 74.8 | +1.65 | 실측 | [[critpt]] 20.8571%×1.0, [[gpqa-diamond]] 89.4949%×1.0, [[humanitys-last-exam]] 41.1492%×1.0 |
| 코딩 | 66.8 | +1.12 | 실측 | [[scicode]] 51.1574%×1.0, [[terminal-bench]] 50.7576%×0.5 |
| 에이전트 | 67.8 | +1.19 | 실측 | [[gdpval]] 1380.06 Elo×1.0, [[tau2-bench]] 99.1228%×1.0, [[tau3-banking]] 34.6392%×1.0, [[terminal-bench]] 50.7576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 78.3333%×1.0 |
| 지시 따르기 | 72.2 | +1.48 | 실측 | [[ifbench]] 73.3333%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
