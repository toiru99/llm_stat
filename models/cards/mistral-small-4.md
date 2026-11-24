---
type: Model
title: Mistral Small 4
creator: Mistral
license: Open
intelligence_index: 4.29716249600478
price_blended_usd_1m: 0.1005
output_speed_tps: 148.243125724875
context_window: 256000
status: current
size_class: Medium
params_b: 119
is_reasoning: true
radar:
  knowledge: { s: 49.5, z: 0.13, r: 52.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.1, z: -0.25, r: 46.3, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.09, r: 51.4, estimated: false }  # 코딩
  agentic: { s: 27.8, z: -0.68, r: 39.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 56.4, z: -0.76, r: 38.5, estimated: false }  # 멀티모달
  long_context: { s: 56.0, z: -0.05, r: 49.2, estimated: false }  # 긴문맥
  instruction: { s: 50.6, z: 0.01, r: 50.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Mistral Small 4

Mistral · Open · Medium(119B) · 컨텍스트 256k · 종합지능 **4.29716249600478**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 148.243125724875 t/s · TTFT 1.4183047103479s · 256k ctx` · 가성비 42.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.0 | +0.13 | 실측 | [[gpqa-diamond]] 76.8687%×0.4, [[humanitys-last-exam]] 9.87025%×0.3 |
| 추론 | 46.3 | -0.25 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 76.8687%×1.0, [[humanitys-last-exam]] 9.87025%×1.0 |
| 코딩 | 51.4 | +0.09 | 실측 | [[scicode]] 38.7731%×1.0, [[terminal-bench]] 17.4242%×0.5 |
| 에이전트 | 39.8 | -0.68 | 실측 | [[gdpval]] 369.35 Elo×1.0, [[tau2-bench]] 41.2281%×1.0, [[tau3-banking]] 4.94845%×1.0, [[terminal-bench]] 17.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 38.5 | -0.76 | 실측 | [[mmmu-pro]] 56.8208%×1.0 |
| 긴문맥 | 49.2 | -0.05 | 실측 | [[aa-lcr]] 49.6667%×1.0 |
| 지시 따르기 | 50.1 | +0.01 | 실측 | [[ifbench]] 48.1633%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
