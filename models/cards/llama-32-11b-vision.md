---
type: Model
title: Llama 3.2 11B (Vision)
creator: Meta
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.345
output_speed_tps: 15.0
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.4, z: -1.3, r: 30.5, estimated: false }  # 전문 지식
  reasoning: { s: 7.4, z: -1.32, r: 30.2, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.2, r: 32.0, estimated: false }  # 코딩
  agentic: { s: 8.3, z: -1.17, r: 32.5, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.47, r: 43.0, estimated: false }  # 신뢰성
  multimodal: { s: 19.2, z: -2.61, r: 10.9, estimated: false }  # 멀티모달
  long_context: { s: 14.6, z: -1.12, r: 33.2, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.21, r: 31.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 11B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Llama 3.2 11B (Vision)

Meta · Open · Small · 컨텍스트 128k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.34 · 출력 $0.34 · 혼합 $0.345/1M · 15.0 t/s · TTFT 2.77s · 128k ctx` · 가성비 14.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.5 | -1.3 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 22.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 30.2 | -1.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 22.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 32.0 | -1.2 | 실측 | [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 32.5 | -1.17 | 실측 | [[tau2-bench]] 15.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 43.0 | -0.47 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 10.9 | -2.61 | 실측 | [[mmmu-pro]] 29.0%×1.0 |
| 긴문맥 | 33.2 | -1.12 | 실측 | [[aa-lcr]] 13.0%×1.0 |
| 지시 따르기 | 31.9 | -1.21 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
