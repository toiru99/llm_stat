---
type: Model
title: Kimi K2.7 Code
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.723
output_speed_tps: 54.0809167253976
context_window: 256000
status: current
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 72.6, z: 1.26, r: 68.8, estimated: false }  # 전문 지식
  reasoning: { s: 55.6, z: 1.01, r: 65.2, estimated: false }  # 추론
  coding: { s: 67.4, z: 0.89, r: 63.3, estimated: false }  # 코딩
  agentic: { s: 65.4, z: 0.65, r: 59.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: 71.6, z: 0.88, r: 63.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.7 Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Kimi K2.7 Code

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.723/1M · 54.0809167253976 t/s · TTFT 6.45832992932369s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 68.8 | +1.26 | 실측 | [[gpqa-diamond]] 89.596%×0.4, [[humanitys-last-exam]] 35.0324%×0.3 |
| 추론 | 65.2 | +1.01 | 실측 | [[critpt]] 10%×1.0, [[gpqa-diamond]] 89.596%×1.0, [[humanitys-last-exam]] 35.0324%×1.0 |
| 코딩 | 63.3 | +0.89 | 실측 | [[scicode]] 47.8009%×1.0, [[terminal-bench]] 44.697%×0.5 |
| 에이전트 | 59.7 | +0.65 | 실측 | [[gdpval]] 1046.06 Elo×1.0, [[tau2-bench]] 90.0585%×1.0, [[tau3-banking]] 20.2062%×1.0, [[terminal-bench]] 44.697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 79.3333%×1.0 |
| 지시 따르기 | 63.2 | +0.88 | 실측 | [[ifbench]] 63.1293%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
