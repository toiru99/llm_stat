---
type: Model
title: DeepSeek V3.1 Terminus
creator: DeepSeek
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 1.7465
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 48.0, z: 0.34, r: 55.2, estimated: false }  # 전문 지식
  reasoning: { s: 37.4, z: 0.11, r: 51.7, estimated: false }  # 추론
  coding: { s: 47.8, z: 0.5, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 37.4, z: -0.01, r: 49.9, estimated: false }  # 에이전트
  trust: { s: 23.7, z: -0.05, r: 49.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.44, r: 56.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 Terminus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-09
timestamp: 2026-09-09T00:00:00Z
---

# DeepSeek V3.1 Terminus

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.64 · 출력 $2.75 · 혼합 $1.7465/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 8.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.2 | +0.34 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 51.7 | +0.11 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 57.6 | +0.5 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 49.9 | -0.01 | 실측 | [[gdpval]] 16.0%×1.0, [[tau2-bench]] 37.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 49.2 | -0.05 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 56.7 | +0.44 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
