---
type: Model
title: Gemma 3 27B
creator: Google
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: 27.4
is_reasoning: false
radar:
  knowledge: { s: 21.3, z: -0.93, r: 36.0, estimated: false }  # 전문 지식
  reasoning: { s: 14.9, z: -0.98, r: 35.3, estimated: false }  # 추론
  coding: { s: 25.4, z: -0.91, r: 36.3, estimated: false }  # 코딩
  agentic: { s: 4.8, z: -1.23, r: 31.5, estimated: false }  # 에이전트
  trust: { s: 7.0, z: -0.89, r: 36.7, estimated: false }  # 신뢰성
  multimodal: { s: 47.1, z: -1.19, r: 32.2, estimated: false }  # 멀티모달
  long_context: { s: 7.2, z: -1.27, r: 30.9, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.05, r: 34.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Gemma 3 27B

Google · Open · Small(27.4B) · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.0 | -0.93 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 43.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.3 | -0.98 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 43.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.3 | -0.91 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 31.5 | -1.23 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 11.0%×1.0, [[tau3-banking]] 1.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 36.7 | -0.89 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 32.2 | -1.19 | 실측 | [[mmmu-pro]] 48.0%×1.0 |
| 긴문맥 | 30.9 | -1.27 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 34.3 | -1.05 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
