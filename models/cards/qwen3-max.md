---
type: Model
title: Qwen3 Max
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
  knowledge: { s: 50.3, z: 0.17, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 30.6, z: -0.23, r: 46.6, estimated: false }  # 추론
  coding: { s: 31.0, z: -0.34, r: 44.9, estimated: false }  # 코딩
  agentic: { s: 53.0, z: 0.2, r: 53.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.4, z: -0.04, r: 49.4, estimated: false }  # 긴문맥
  instruction: { s: 45.0, z: -0.23, r: 46.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Qwen3 Max

Alibaba · Proprietary · Unknown · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.17 | 실측 | [[gpqa-diamond]] 76.3636%×0.4, [[humanitys-last-exam]] 11.9092%×0.3 |
| 추론 | 46.6 | -0.23 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 76.3636%×1.0, [[humanitys-last-exam]] 11.9092%×1.0 |
| 코딩 | 44.9 | -0.34 | 실측 | [[terminal-bench]] 20.4545%×0.5 |
| 에이전트 | 53.1 | +0.2 | 실측 | [[tau2-bench]] 74.269%×1.0, [[terminal-bench]] 20.4545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.4 | -0.04 | 실측 | [[aa-lcr]] 50%×1.0 |
| 지시 따르기 | 46.6 | -0.23 | 실측 | [[ifbench]] 44.1497%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
