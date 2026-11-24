---
type: Model
title: GLM-5.1
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.794
output_speed_tps: 68.44913657584661
context_window: 200000
status: past
size_class: Large
params_b: 744
is_reasoning: true
radar:
  knowledge: { s: 67.8, z: 1.02, r: 65.4, estimated: false }  # 전문 지식
  reasoning: { s: 47.1, z: 0.6, r: 58.9, estimated: false }  # 추론
  coding: { s: 63.4, z: 0.75, r: 61.3, estimated: false }  # 코딩
  agentic: { s: 64.4, z: 0.61, r: 59.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.78, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.65, r: 74.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GLM-5.1

Z AI · Open · Large(744B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $1.19 · 출력 $3.74 · 혼합 $0.794/1M · 68.44913657584661 t/s · TTFT 3.8939212908499847s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 65.4 | +1.02 | 실측 | [[gpqa-diamond]] 86.7677%×0.4, [[humanitys-last-exam]] 30.0741%×0.3 |
| 추론 | 58.9 | +0.6 | 실측 | [[critpt]] 4.57143%×1.0, [[gpqa-diamond]] 86.7677%×1.0, [[humanitys-last-exam]] 30.0741%×1.0 |
| 코딩 | 61.3 | +0.75 | 실측 | [[scicode]] 44.7917%×1.0, [[terminal-bench]] 43.1818%×0.5 |
| 에이전트 | 59.1 | +0.61 | 실측 | [[gdpval]] 1124.69 Elo×1.0, [[tau2-bench]] 97.6608%×1.0, [[tau3-banking]] 13.6082%×1.0, [[terminal-bench]] 43.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.6 | +0.78 | 실측 | [[aa-lcr]] 73.6667%×1.0 |
| 지시 따르기 | 74.7 | +1.65 | 실측 | [[ifbench]] 76.2585%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
