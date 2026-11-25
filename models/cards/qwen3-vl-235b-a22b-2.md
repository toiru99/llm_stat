---
type: Model
title: Qwen3 VL 235B A22B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.294
output_speed_tps: 35.22299117728
context_window: 262144
status: past
size_class: Large
params_b: 235
is_reasoning: false
radar:
  knowledge: { s: 43.8, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 26.2, z: -0.44, r: 43.3, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.04, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 22.9, z: -0.85, r: 37.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 70.8, z: -0.03, r: 49.5, estimated: false }  # 멀티모달
  long_context: { s: 36.8, z: -0.64, r: 40.4, estimated: false }  # 긴문맥
  instruction: { s: 42.9, z: -0.31, r: 45.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3 VL 235B A22B

Alibaba · Open · Large(235B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.215 · 출력 $1.39 · 혼합 $0.294/1M · 35.22299117728 t/s · TTFT 2.56863433148604s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 71.2121%×0.4, [[humanitys-last-exam]] 6.62651%×0.3 |
| 추론 | 43.3 | -0.44 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 71.2121%×1.0, [[humanitys-last-exam]] 6.62651%×1.0 |
| 코딩 | 34.5 | -1.04 | 실측 | [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 37.2 | -0.85 | 실측 | [[tau2-bench]] 35.0877%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.5 | -0.03 | 실측 | [[mmmu-pro]] 67.5723%×1.0 |
| 긴문맥 | 40.4 | -0.64 | 실측 | [[aa-lcr]] 32.6667%×1.0 |
| 지시 따르기 | 45.3 | -0.31 | 실측 | [[ifbench]] 42.6531%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
