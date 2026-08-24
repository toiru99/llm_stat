---
type: Model
title: Qwen3 Max Thinking
creator: Alibaba
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.5, z: 0.72, r: 60.8, estimated: false }  # 전문 지식
  reasoning: { s: 48.6, z: 0.63, r: 59.4, estimated: false }  # 추론
  coding: { s: 59.9, z: 0.46, r: 56.9, estimated: false }  # 코딩
  agentic: { s: 60.6, z: 0.91, r: 63.6, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.05, r: 34.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.17, r: 67.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Max Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Qwen3 Max Thinking

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.8 | +0.72 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 59.4 | +0.63 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 56.9 | +0.46 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 63.6 | +0.91 | 실측 | [[tau2-bench]] 84.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 34.2 | -1.05 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
