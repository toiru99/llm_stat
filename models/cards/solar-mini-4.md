---
type: Model
title: Solar Mini 4
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.067
output_speed_tps: 128.691408169937
context_window: 1048576
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 33.7, z: -0.63, r: 40.5, estimated: false }  # 전문 지식
  reasoning: { s: 18.9, z: -0.81, r: 37.9, estimated: false }  # 추론
  coding: { s: 66.9, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 65.9, z: 0.66, r: 59.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Solar Mini 4

Upstage · Proprietary · Small · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 128.691408169937 t/s · TTFT 2.62916354808539s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.5 | -0.63 | 실측 | [[humanitys-last-exam]] 25.7646%×0.3 |
| 추론 | 37.9 | -0.81 | 실측 | [[critpt]] 1.42857%×1.0, [[humanitys-last-exam]] 25.7646%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[scicode]] 47.5694%×1.0 |
| 에이전트 | 59.9 | +0.66 | 실측 | [[gdpval]] 1092.1 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 83.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
