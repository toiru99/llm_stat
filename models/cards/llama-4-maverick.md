---
type: Model
title: Llama 4 Maverick
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.318
output_speed_tps: 96.2582315315026
context_window: 1000000
status: current
size_class: Large
params_b: 402
is_reasoning: false
radar:
  knowledge: { s: 40.1, z: -0.32, r: 45.1, estimated: false }  # 전문 지식
  reasoning: { s: 23.8, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 30.6, z: -0.35, r: 44.7, estimated: false }  # 코딩
  agentic: { s: 10.3, z: -1.3, r: 30.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 56.4, z: -0.04, r: 49.4, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.29, r: 45.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Maverick
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Llama 4 Maverick

Meta · Open · Large(402B) · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $1.0 · 혼합 $0.318/1M · 96.2582315315026 t/s · TTFT 1.13539430017205s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.1 | -0.32 | 실측 | [[gpqa-diamond]] 67.0707%×0.4, [[humanitys-last-exam]] 4.91196%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 67.0707%×1.0, [[humanitys-last-exam]] 4.91196%×1.0 |
| 코딩 | 44.7 | -0.35 | 실측 | [[scicode]] 31.713%×1.0, [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 30.5 | -1.3 | 실측 | [[gdpval]] -268.1 Elo×1.0, [[tau2-bench]] 17.8363%×1.0, [[tau3-banking]] 3.71134%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 62.1387%×1.0 |
| 긴문맥 | 49.4 | -0.04 | 실측 | [[aa-lcr]] 50%×1.0 |
| 지시 따르기 | 45.6 | -0.29 | 실측 | [[ifbench]] 42.9932%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
