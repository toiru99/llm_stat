---
type: Model
title: Qwen3.7 Plus
creator: Alibaba
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.268
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.7, z: 0.57, r: 58.5, estimated: false }  # 전문 지식
  reasoning: { s: 60.5, z: 1.22, r: 68.4, estimated: false }  # 추론
  coding: { s: 71.2, z: 1.37, r: 70.6, estimated: false }  # 코딩
  agentic: { s: 55.1, z: 0.67, r: 60.1, estimated: false }  # 에이전트
  trust: { s: 72.2, z: 2.26, r: 83.8, estimated: false }  # 신뢰성
  multimodal: { s: 90.3, z: 1.0, r: 64.9, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.69, r: 75.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3.7 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.268/1M · 55.0 t/s · TTFT 2.15s · 1M ctx` · 가성비 115.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.5 | +0.57 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 68.4 | +1.22 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 70.6 | +1.37 | 실측 | [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 60.1 | +0.67 | 실측 | [[apex-agents]] 22.0%×1.0, [[gdpval]] 19.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 83.8 | +2.26 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | 64.9 | +1.0 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 75.4 | +1.69 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
