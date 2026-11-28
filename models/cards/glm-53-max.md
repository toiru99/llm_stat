---
type: Model
title: GLM-5.3 (max)
creator: Z AI
license: Open
intelligence_index: 31.5523717428719
price_blended_usd_1m: 0.902
output_speed_tps: 78.8635006115702
context_window: 1000000
status: current
size_class: Large
params_b: 753
is_reasoning: true
radar:
  knowledge: { s: 78.3, z: 1.53, r: 73.0, estimated: false }  # 전문 지식
  reasoning: { s: 68.2, z: 1.64, r: 74.6, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.51, r: 72.6, estimated: false }  # 코딩
  agentic: { s: 94.3, z: 1.66, r: 74.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GLM-5.3 (max)

Z AI · Open · Large(753B) · 컨텍스트 1M · 종합지능 **31.5523717428719**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 78.8635006115702 t/s · TTFT 1.43492616483843s · 1M ctx` · 가성비 35.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.0 | +1.53 | 실측 | [[gpqa-diamond]] 91.7172%×0.4, [[humanitys-last-exam]] 42.2614%×0.3 |
| 추론 | 74.6 | +1.64 | 실측 | [[critpt]] 19.1429%×1.0, [[gpqa-diamond]] 91.7172%×1.0, [[humanitys-last-exam]] 42.2614%×1.0 |
| 코딩 | 72.6 | +1.51 | 실측 | [[scicode]] 59.0278%×1.0 |
| 에이전트 | 74.9 | +1.66 | 실측 | [[gdpval]] 1654.49 Elo×1.0, [[tau3-banking]] 50.3093%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.8 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
