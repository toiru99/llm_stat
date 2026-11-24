---
type: Model
title: Ministral 3 3B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.037
output_speed_tps: 156.788948102976
context_window: 256000
status: current
size_class: Tiny
params_b: 3
is_reasoning: false
radar:
  knowledge: { s: 19.7, z: -1.32, r: 30.2, estimated: false }  # 전문 지식
  reasoning: { s: 12.0, z: -1.15, r: 32.7, estimated: false }  # 추론
  coding: { s: 9.1, z: -1.08, r: 33.9, estimated: false }  # 코딩
  agentic: { s: 13.3, z: -1.19, r: 32.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 31.5, z: -2.04, r: 19.4, estimated: false }  # 멀티모달
  long_context: { s: 19.2, z: -1.18, r: 32.3, estimated: false }  # 긴문맥
  instruction: { s: 20.6, z: -1.24, r: 31.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Ministral 3 3B

Mistral · Open · Tiny(3B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.1 · 혼합 $0.037/1M · 156.788948102976 t/s · TTFT 1.67238628874617s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 30.2 | -1.32 | 실측 | [[gpqa-diamond]] 35.7576%×0.4, [[humanitys-last-exam]] 5.37535%×0.3 |
| 추론 | 32.7 | -1.15 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 35.7576%×1.0, [[humanitys-last-exam]] 5.37535%×1.0 |
| 코딩 | 33.9 | -1.08 | 실측 | [[scicode]] 15.2778%×1.0, [[terminal-bench]] 0%×0.5 |
| 에이전트 | 32.1 | -1.19 | 실측 | [[gdpval]] 36.4 Elo×1.0, [[tau2-bench]] 24.8538%×1.0, [[tau3-banking]] 4.74227%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 19.4 | -2.04 | 실측 | [[mmmu-pro]] 38.0925%×1.0 |
| 긴문맥 | 32.3 | -1.18 | 실측 | [[aa-lcr]] 17%×1.0 |
| 지시 따르기 | 31.4 | -1.24 | 실측 | [[ifbench]] 26.8027%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
