---
type: Model
title: Qwen3.5 27B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.51
output_speed_tps: 22.4408857602402
context_window: 262144
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.6, z: 0.78, r: 61.8, estimated: false }  # 전문 지식
  reasoning: { s: 40.5, z: 0.24, r: 53.6, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 72.1, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.7, z: 0.48, r: 57.1, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: 89.1, z: 1.47, r: 72.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Qwen3.5 27B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 22.4408857602402 t/s · TTFT 13.8016974542194s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.8 | +0.78 | 실측 | [[gpqa-diamond]] 85.7575757575758%×0.4, [[humanitys-last-exam]] 23.9110287303058%×0.3 |
| 추론 | 53.6 | +0.24 | 실측 | [[critpt]] 0.8530612244897959%×1.0, [[gpqa-diamond]] 85.7575757575758%×1.0, [[humanitys-last-exam]] 23.9110287303058%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[terminal-bench]] 32.5757575757576%×0.5 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[tau2-bench]] 93.859649122807%×1.0, [[terminal-bench]] 32.5757575757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.1 | +0.48 | 실측 | [[mmmu-pro]] 75.028901734104%×1.0 |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 77.6666666666667%×1.0 |
| 지시 따르기 | 72.1 | +1.47 | 실측 | [[ifbench]] 75.57823129251699%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
