---
type: Model
title: GLM-5
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.66
output_speed_tps: 68.9155307759559
context_window: 200000
status: past
size_class: Large
params_b: 744
is_reasoning: true
radar:
  knowledge: { s: 64.2, z: 0.85, r: 62.7, estimated: false }  # 전문 지식
  reasoning: { s: 42.6, z: 0.37, r: 55.5, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.82, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 82.3, z: 1.24, r: 68.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.3, z: 0.84, r: 62.7, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.42, r: 71.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GLM-5

Z AI · Open · Large(744B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 코딩, 추론

## 실용 지표
`입력 $1.0 · 출력 $3.2 · 혼합 $0.66/1M · 68.9155307759559 t/s · TTFT 2.63397749574999s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.7 | +0.85 | 실측 | [[gpqa-diamond]] 82.0202%×0.4, [[humanitys-last-exam]] 29.2864%×0.3 |
| 추론 | 55.5 | +0.37 | 실측 | [[critpt]] 2%×1.0, [[gpqa-diamond]] 82.0202%×1.0, [[humanitys-last-exam]] 29.2864%×1.0 |
| 코딩 | 62.4 | +0.82 | 실측 | [[terminal-bench]] 43.1818%×0.5 |
| 에이전트 | 68.6 | +1.24 | 실측 | [[tau2-bench]] 98.2456%×1.0, [[terminal-bench]] 43.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.7 | +0.84 | 실측 | [[aa-lcr]] 75.6667%×1.0 |
| 지시 따르기 | 71.3 | +1.42 | 실측 | [[ifbench]] 72.3129%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
