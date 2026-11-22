---
type: Model
title: Qwen3 32B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.27
output_speed_tps: 36.5927169311033
context_window: 32768
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 41.4, z: -0.29, r: 45.7, estimated: false }  # 전문 지식
  reasoning: { s: 25.1, z: -0.52, r: 42.2, estimated: false }  # 추론
  coding: { s: 33.4, z: -0.23, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 16.1, z: -1.0, r: 35.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 34.0, z: -0.83, r: 37.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Qwen3 32B

Alibaba · Open · Small · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.24000000000000002 · 출력 $0.54 · 혼합 $0.27/1M · 36.5927169311033 t/s · TTFT 0.79156526719714s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.7 | -0.29 | 실측 | [[gpqa-diamond]] 66.7676767676768%×0.4, [[humanitys-last-exam]] 7.41%×0.3 |
| 추론 | 42.2 | -0.52 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 66.7676767676768%×1.0, [[humanitys-last-exam]] 7.41%×1.0 |
| 코딩 | 46.6 | -0.23 | 실측 | [[scicode]] 35.9953703703704%×1.0, [[terminal-bench]] 3.03030303030303%×0.5 |
| 에이전트 | 35.0 | -1.0 | 실측 | [[gdpval]] 40.53%×1.0, [[tau2-bench]] 29.8245614035088%×1.0, [[tau3-banking]] 5.36082474226804%×1.0, [[terminal-bench]] 3.03030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 37.5 | -0.83 | 실측 | [[ifbench]] 36.3265306122449%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
