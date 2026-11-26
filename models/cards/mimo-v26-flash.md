---
type: Model
title: MiMo-V2.6-Flash
creator: Xiaomi
license: Open
intelligence_index: 26.8287082454669
price_blended_usd_1m: 0.058
output_speed_tps: 36.0662337962451
context_window: 1000000
status: current
size_class: Large
params_b: 309
is_reasoning: true
radar:
  knowledge: { s: 46.5, z: -0.02, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 40.0, z: 0.24, r: 53.6, estimated: false }  # 추론
  coding: { s: 73.0, z: 1.08, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 89.0, z: 1.48, r: 72.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.34, r: 55.1, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# MiMo-V2.6-Flash

Xiaomi · Open · Large(309B) · 컨텍스트 1M · 종합지능 **26.8287082454669**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.058/1M · 36.0662337962451 t/s · TTFT 4.60579538577458s · 1M ctx` · 가성비 462.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.02 | 실측 | [[humanitys-last-exam]] 35.0788%×0.3 |
| 추론 | 53.6 | +0.24 | 실측 | [[critpt]] 12%×1.0, [[humanitys-last-exam]] 35.0788%×1.0 |
| 코딩 | 66.1 | +1.08 | 실측 | [[scicode]] 51.2731%×1.0 |
| 에이전트 | 72.1 | +1.48 | 실측 | [[gdpval]] 1615.72 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.1 | +0.34 | 실측 | [[mmmu-pro]] 73.0636%×1.0 |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 74.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
