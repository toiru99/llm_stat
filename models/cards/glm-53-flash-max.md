---
type: Model
title: GLM-5.3-Flash (max)
creator: Z AI
license: Open
intelligence_index: 27.742995221489
price_blended_usd_1m: 0.101
output_speed_tps: 51.7727204826834
context_window: 1000000
status: current
size_class: Large
params_b: 320
is_reasoning: true
radar:
  knowledge: { s: 76.5, z: 1.45, r: 71.7, estimated: false }  # 전문 지식
  reasoning: { s: 63.4, z: 1.41, r: 71.1, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 91.2, z: 1.55, r: 73.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3-Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GLM-5.3-Flash (max)

Z AI · Open · Large(320B) · 컨텍스트 1M · 종합지능 **27.742995221489**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.5 · 혼합 $0.101/1M · 51.7727204826834 t/s · TTFT 3.20153938098202s · 1M ctx` · 가성비 274.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 71.7 | +1.45 | 실측 | [[gpqa-diamond]] 91.2121%×0.4, [[humanitys-last-exam]] 39.8517%×0.3 |
| 추론 | 71.1 | +1.41 | 실측 | [[critpt]] 15.4286%×1.0, [[gpqa-diamond]] 91.2121%×1.0, [[humanitys-last-exam]] 39.8517%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 51.6204%×1.0 |
| 에이전트 | 73.3 | +1.55 | 실측 | [[gdpval]] 1649.21 Elo×1.0, [[tau3-banking]] 47.2165%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
