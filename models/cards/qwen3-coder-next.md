---
type: Model
title: Qwen3 Coder Next
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.3615
output_speed_tps: 81.9559581662806
context_window: 256000
status: current
size_class: Medium
params_b: 79.7
is_reasoning: false
radar:
  knowledge: { s: 47.6, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.8, z: -0.32, r: 45.3, estimated: false }  # 추론
  coding: { s: 41.3, z: 0.01, r: 50.1, estimated: false }  # 코딩
  agentic: { s: 39.7, z: -0.26, r: 46.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 53.0, z: -0.14, r: 47.8, estimated: false }  # 긴문맥
  instruction: { s: 32.5, z: -0.75, r: 38.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Qwen3 Coder Next

Alibaba · Open · Medium(79.7B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.31 · 출력 $1.0 · 혼합 $0.3615/1M · 81.9559581662806 t/s · TTFT 1.378076116253925s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[gpqa-diamond]] 73.7374%×0.4, [[humanitys-last-exam]] 10.1483%×0.3 |
| 추론 | 45.3 | -0.32 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 73.7374%×1.0, [[humanitys-last-exam]] 10.1483%×1.0 |
| 코딩 | 50.1 | +0.01 | 실측 | [[scicode]] 36.2269%×1.0, [[terminal-bench]] 18.1818%×0.5 |
| 에이전트 | 46.1 | -0.26 | 실측 | [[gdpval]] 521.07 Elo×1.0, [[tau2-bench]] 79.5322%×1.0, [[tau3-banking]] 5.36082%×1.0, [[terminal-bench]] 18.1818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.8 | -0.14 | 실측 | [[aa-lcr]] 47%×1.0 |
| 지시 따르기 | 38.8 | -0.75 | 실측 | [[ifbench]] 35.2381%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
