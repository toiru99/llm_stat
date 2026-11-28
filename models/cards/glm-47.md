---
type: Model
title: GLM-4.7
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.511
output_speed_tps: 74.7999951450884
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: true
radar:
  knowledge: { s: 65.7, z: 0.92, r: 63.8, estimated: false }  # 전문 지식
  reasoning: { s: 42.9, z: 0.38, r: 55.8, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 57.8, z: 0.37, r: 55.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.1, z: 0.69, r: 60.3, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.16, r: 67.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GLM-4.7

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.525 · 출력 $2.1 · 혼합 $0.511/1M · 74.7999951450884 t/s · TTFT 3.59494459105835s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 63.8 | +0.92 | 실측 | [[gpqa-diamond]] 85.8586%×0.4, [[humanitys-last-exam]] 27.3865%×0.3 |
| 추론 | 55.8 | +0.38 | 실측 | [[critpt]] 1.7102%×1.0, [[gpqa-diamond]] 85.8586%×1.0, [[humanitys-last-exam]] 27.3865%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.8182%×0.5 |
| 에이전트 | 55.6 | +0.37 | 실측 | [[gdpval]] 1021.21 Elo×1.0, [[tau2-bench]] 95.9064%×1.0, [[tau3-banking]] 12.1649%×1.0, [[terminal-bench]] 31.8182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.3 | +0.69 | 실측 | [[aa-lcr]] 71%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 실측 | [[ifbench]] 67.8912%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
