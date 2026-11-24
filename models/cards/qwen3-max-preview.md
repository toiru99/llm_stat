---
type: Model
title: Qwen3 Max (Preview)
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 49.3, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.6, z: -0.23, r: 46.6, estimated: false }  # 추론
  coding: { s: 29.9, z: -0.38, r: 44.3, estimated: false }  # 코딩
  agentic: { s: 31.5, z: -0.55, r: 41.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.5, z: -0.28, r: 45.7, estimated: false }  # 긴문맥
  instruction: { s: 50.4, z: -0.0, r: 50.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3 Max (Preview)

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[gpqa-diamond]] 76.3636%×0.4, [[humanitys-last-exam]] 10.1483%×0.3 |
| 추론 | 46.6 | -0.23 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 76.3636%×1.0, [[humanitys-last-exam]] 10.1483%×1.0 |
| 코딩 | 44.3 | -0.38 | 실측 | [[terminal-bench]] 19.697%×0.5 |
| 에이전트 | 41.7 | -0.55 | 실측 | [[tau2-bench]] 32.7485%×1.0, [[terminal-bench]] 19.697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.7 | -0.28 | 실측 | [[aa-lcr]] 43%×1.0 |
| 지시 따르기 | 50.0 | +-0.0 | 실측 | [[ifbench]] 48.0272%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
