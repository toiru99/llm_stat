---
type: Model
title: DeepSeek V3.2 (Non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.294
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: false
radar:
  knowledge: { s: 41.9, z: 0.05, r: 50.7, estimated: false }  # 전문 지식
  reasoning: { s: 32.0, z: -0.15, r: 47.8, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.62, r: 59.3, estimated: false }  # 코딩
  agentic: { s: 64.9, z: 1.05, r: 65.8, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.7, z: 0.08, r: 51.2, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.02, r: 49.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.2 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# DeepSeek V3.2 (Non-reasoning)

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.28 · 출력 $0.42 · 혼합 $0.294/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 61.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.7 | +0.05 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.8 | -0.15 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 59.3 | +0.62 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 65.8 | +1.05 | 실측 | [[tau2-bench]] 79.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.2 | +0.08 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 49.6 | -0.02 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
